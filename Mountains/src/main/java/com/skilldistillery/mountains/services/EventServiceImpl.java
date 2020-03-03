package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.ChatRoom;
import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.entities.Message;
import com.skilldistillery.mountains.entities.Mountain;
import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.repositories.ChatRoomRepository;
import com.skilldistillery.mountains.repositories.EventRepository;
import com.skilldistillery.mountains.repositories.MessageRepository;
import com.skilldistillery.mountains.repositories.MountainRepository;
import com.skilldistillery.mountains.repositories.UserRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository repo;
	
	@Autowired
	private MountainRepository mRepo;
	
	@Autowired
	private ChatRoomRepository chatRepo;
	
	@Autowired
	private MessageRepository mesRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public Event getEventById(int id) {
		Optional<Event> eventOpt = repo.findById(id);
		if (eventOpt.isPresent()) {
			return eventOpt.get();
		}
		return null;
	}

	@Override
	public List<Event> getAll() {
		return repo.findAll();
	}
	
	@Override
	public List<Event> getAllAvailableEvent() {
		return repo.findByCompleted(false);
	}

	public Event addUserToEvent(int id, User user) {
		Optional<Event> eventOpt = repo.findById(id);
		if (eventOpt.isPresent()) {
			Event event = eventOpt.get();
			event.addUser(user);
			repo.saveAndFlush(event);
			return event;
		}
		return null;

	}

	@Override
	public Event createEvent(Event event) {
		mRepo.save(event.getMountain());
		repo.save(event);
		System.out.println(event);
		ChatRoom chat = new ChatRoom();
		chat.setEvent(event);
		chatRepo.saveAndFlush(chat);
		return event;
	}

	@Override
	public List<Event> findByuserName(String username) {
		return repo.findByUsers_UsernameAndCompleted(username, false);

	}
	
	@Override
	public List<Event> findByHost(String username) {
		return repo.findByHost_UsernameAndCompleted(username, false);

	}

	public Event updateEvent(int id, Event event) {
		Optional<Event> eventOpt = repo.findById(id);
		if (eventOpt.isPresent()) {
			Event managedEvent = eventOpt.get();
			managedEvent.setDescription(event.getDescription());
			managedEvent.setEventDate(event.getEventDate());
			managedEvent.setCompleted(event.getCompleted());
			repo.saveAndFlush(managedEvent);
			return managedEvent;
		}
		return event;
	}

	@Override
	public Event unjoinEvent(int id, User user) {
		Optional<Event> eventOpt = repo.findById(id);
		if (eventOpt.isPresent()) {
			Event event = eventOpt.get();
			event.removeUser(user);
			repo.saveAndFlush(event);
			return event;
		}
		else	return null;

	}

	@Override
	public Boolean delete(int id) {
		Optional<Event> eventOpt = repo.findById(id);
		if (eventOpt.isPresent()) {	
			Event event = eventOpt.get();
			ChatRoom chat = chatRepo.findByEvent_Id(event.getId());
			for(Message message : chat.getMessages()) {
				mesRepo.delete(message);
			}
			chatRepo.delete(chat);
			repo.delete(event);
			mRepo.delete(event.getMountain());
			return true;
	}
		return false;
}

	@Override
	public Event complete(int id) {
		Optional<Event> eventOpt = repo.findById(id);
		Event event=new Event();
		if(eventOpt.isPresent()) {
			event=eventOpt.get();
			event.setCompleted(true);
			List<User> users = event.getUsers();
			users.add(event.getHost());
			for(User user : users) {
				user.addMountain(event.getMountain());
				userRepo.saveAndFlush(user);
			}
			repo.save(event);
		}
		return event;
	}
	

}
