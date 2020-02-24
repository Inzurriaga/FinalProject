package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.UserInfo;

public interface UserInfoService {
	public UserInfo findById(Integer id) ;
	
	public List<UserInfo> findAll();
}
