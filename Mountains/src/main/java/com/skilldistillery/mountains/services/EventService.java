package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.Event;



public interface EventService {
	public Event getEventById(int id);
	public List<Event> getAll();
}
