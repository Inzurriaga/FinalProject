package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.User;

public interface UserService {
	public List<User> getUserList();
	public User getUserByUsername(String username);
	public User updateUser(String username, User user);
}
