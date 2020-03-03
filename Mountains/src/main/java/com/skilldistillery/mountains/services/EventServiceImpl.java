package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.entities.Mountain;
import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.repositories.EventRepository;
import com.skilldistillery.mountains.repositories.MountainRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository repo;
	
	@Autowired
	private MountainRepository mRepo;

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
		mRepo.saveAndFlush(event.getMountain());
		event = repo.saveAndFlush(event);
		return event;
	}

	@Override
	public List<Event> findByuserName(String username) {
		return repo.findByUsers_Username(username);

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
			Mountain mountain = event.getMountain();
			mountain.setUsers(users);
		}
		return event;
	}
	

}
