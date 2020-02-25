package com.skilldistillery.mountains.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.services.UserAuthService;

@RestController
@CrossOrigin({"*", "http://localhost:4300"})
public class UserAuthController {
	
	@Autowired
	private UserAuthService srv;
	
	
	@PostMapping("/register")
	public User register(@RequestBody User user, HttpServletResponse res) {
		System.out.println(user);
	    if (user == null) {
	        res.setStatus(400);
	    }
	    user = srv.register(user);
	    return user;
	}

	@GetMapping("/authenticate")
	public Principal authenticate(Principal principal) {
	    return principal;
	}

}
