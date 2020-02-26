package com.skilldistillery.mountains.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.services.UserService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class UserController {
	@Autowired
	private UserService srv;
	
	@GetMapping(path="user/{username}")
	public User getUser(@PathVariable String username, HttpServletResponse rsp) {
		User user = srv.getUserByUsername(username);
		if (user == null) {
			rsp.setStatus(404);
		} else {
			rsp.setStatus(201);
		}
		return user;
	}
	
	@PutMapping("user/{username}")
	public User updateUser(@PathVariable String username, @RequestBody User user) {
		User updatedUser = srv.updateUser(username, user);
		if(updatedUser.getId() > 0) {
			return updatedUser;
		}
		return user;
	}

}
