package com.skilldistillery.mountains.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.mountains.entities.UserInfo;
import com.skilldistillery.mountains.repositories.UserInfoRepository;

public class UserInfoServiceImpl implements UserInfoService {

	@Autowired
	private UserInfoRepository repo;

	@Override
	public UserInfo findById(Integer id) {
		Optional<UserInfo> op = repo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

}
