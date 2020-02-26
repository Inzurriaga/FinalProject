package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.repositories.EventRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository repo;

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
		event = repo.saveAndFlush(event);
		return event;
	}

	@Override
	public List<Event> findByuserName(String username) {
		return repo.findByUser_Username(username);

	}

}
