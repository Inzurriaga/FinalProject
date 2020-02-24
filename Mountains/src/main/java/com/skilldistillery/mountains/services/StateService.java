package com.skilldistillery.mountains.services;

import java.util.List;

import com.skilldistillery.mountains.entities.State;

public interface StateService {
	public State findById(Integer id) ;
	public List<State> findAll();
}
