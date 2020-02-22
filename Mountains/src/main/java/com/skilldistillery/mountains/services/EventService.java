package com.skilldistillery.mountains.services;

import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Event;



public interface EventService {
	public Event getEventById(int id);
}
