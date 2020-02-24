package com.skilldistillery.mountains.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.State;
import com.skilldistillery.mountains.services.StateService;

@RestController
@RequestMapping("api")
public class StateController {
	
	@Autowired
	private StateService svc;
	
	@GetMapping(path="state/{id}")
	public State getState(@PathVariable Integer id, HttpServletResponse rsp) {
		State state= svc.findById(id);
		if (state == null) {
			rsp.setStatus(404);
		} else {
			rsp.setStatus(201);
		}
		return state;
	}
	@GetMapping(path="state")
	public List<State> getAllStates(HttpServletResponse rsp){
		return svc.findAll();
	}

}
