package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.entities.User;



public interface EventService {
	public Event getEventById(int id);
	public List<Event> getAll();
	public Event addUserToEvent(int id, User user);
	public Event createEvent(Event event);
	public List<Event> findByuserName(String username);
	Event updateEvent(int id, Event event);
	public Event unjoinEvent(int id, User user);
	public Boolean delete(int id);
	public Event complete(int id);
}
