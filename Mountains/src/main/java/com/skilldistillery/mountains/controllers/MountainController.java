package com.skilldistillery.mountains.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.Mountain;
import com.skilldistillery.mountains.services.MountainService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class MountainController {
	
	@Autowired
	private MountainService svc;
	
	@GetMapping(path="mountain/{id}")
	public Mountain getMountain(@PathVariable Integer id, HttpServletResponse rsp) {
		Mountain mountain= svc.findById(id);
		if (mountain == null) {
			rsp.setStatus(404);
		} else {
			rsp.setStatus(201);
		}
		return mountain;
	}

	@GetMapping(path="mountain")
	public List<Mountain> allMountains(){
		return svc.showAllMountains();
	}
	
}
