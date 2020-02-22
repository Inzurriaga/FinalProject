package com.skilldistillery.mountains.services;

import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Mountain;

@Service
public interface MountainService {
	public Mountain findById(Integer id) ;
}
