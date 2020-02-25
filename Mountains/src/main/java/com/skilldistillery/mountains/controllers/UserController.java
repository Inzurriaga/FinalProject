package com.skilldistillery.mountains.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.services.UserService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class UserController {
	@Autowired
	private UserService svc;
	
	@GetMapping(path="user/{username}")
	public User getUserInfo(@PathVariable String username, HttpServletResponse rsp) {
		User user = svc.getUserByUsername(username);
		if (user == null) {
			rsp.setStatus(404);
		} else {
			rsp.setStatus(201);
		}
		return user;
	}

}
