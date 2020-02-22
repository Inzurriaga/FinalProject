package com.skilldistillery.mountains.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.MountainClass;
import com.skilldistillery.mountains.services.MountainClassService;

@RestController
@RequestMapping("api")
public class MountainClassController {
	@Autowired
	private MountainClassService srv;
	
	@GetMapping("mountainClass/{id}")
	public MountainClass getMountainClassById(@PathVariable Integer id) {
		return srv.getMountainClassById(id);
	}
	
}

