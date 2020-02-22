package com.skilldistillery.mountains.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.services.EventService;

@RestController
@RequestMapping("api")
public class EventController {
	
	@Autowired
	private EventService srv;
	
	@GetMapping("event/{id}")
	public Event getEventById(@PathVariable Integer id) {
		return srv.getEventById(id);
	}
	

}
