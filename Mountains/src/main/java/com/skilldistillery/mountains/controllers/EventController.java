package com.skilldistillery.mountains.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		System.out.println("hello world how are you doing");
		return srv.addUserToEvent(id, user);

	}
	@PostMapping("event")
	public Event createEvent(@RequestBody Event event) {
		System.out.println(event);
		return srv.createEvent(event);
	}

	@GetMapping("event/user/{username}")
	public List<Event> findSingleUserEvents(@PathVariable String username){
		return srv.findByuserName(username);
	
	
	@PutMapping("event/{id}")
	public Event update(HttpServletRequest req, HttpServletResponse res, @PathVariable int id, @RequestBody Event event, Principal principal) {
		try {
			event = srv.updateEvent(id, event);
			if (event == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			event = null;
			e.printStackTrace();
		}
		return event;
	}
}
