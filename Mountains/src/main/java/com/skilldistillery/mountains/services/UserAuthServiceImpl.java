package com.skilldistillery.mountains.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.User;
import com.skilldistillery.mountains.repositories.UserAuthRepository;

@Service
public class UserAuthServiceImpl implements UserAuthService {
	@Autowired
	private UserAuthRepository repo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public User register(User user) {
		String encodedPW = encoder.encode(user.getPassword());
		user.setPassword(encodedPW);
		repo.saveAndFlush(user);
		return user;
	}

}
