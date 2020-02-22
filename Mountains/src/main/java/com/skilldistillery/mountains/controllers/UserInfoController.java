package com.skilldistillery.mountains.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.UserInfo;
import com.skilldistillery.mountains.services.UserInfoService;

@RestController
@RequestMapping("api")
public class UserInfoController {
	
	@Autowired
	private UserInfoService svc;
	
	@GetMapping(path="userinfo/{id}")
	public UserInfo getUserInfo(@PathVariable Integer id, HttpServletResponse rsp) {
		UserInfo userInfo= svc.findById(id);
		if (userInfo == null) {
			rsp.setStatus(404);
		} else {
			rsp.setStatus(201);
		}
		return userInfo;
	}


}