package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;
	
	@Override
	public User getUserByUsername(String username) {
		Optional<User> userOpt = repo.findByUsername(username);
		if(userOpt.isPresent()) {
			return userOpt.get();
		}
		return null;
	}

	@Override
	public List<User> getUserList() {
		return repo.findAll();
	}

}
