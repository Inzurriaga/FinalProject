package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.MountainClass;

public interface MountainClassService {
	
	public MountainClass getMountainClassById(int id);

	public List<MountainClass> getMountainClassList();
}
