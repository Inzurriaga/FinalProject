package com.skilldistillery.mountains.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.services.EventService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class EventController {
	
	@Autowired
	private EventService srv;
	
	@GetMapping("event/{id}")
	public Event getEventById(@PathVariable Integer id) {
		return srv.getEventById(id);
	}
	
	@GetMapping(path="event")
	public List<Event> getAllEvents(){
		return srv.getAll();
	}
	
	@PostMapping("event/{id}")
	public Event addUserToEvent(@RequestBody User user, @PathVariable Integer id) {
		return srv.addUserToEvent(id, user);

	}
}
