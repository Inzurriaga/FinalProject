package com.skilldistillery.mountains.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Mountain {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private double longitude;

	private double latitude;

	private int height;
	
	public List<Event> getEvents() {
		return events;
	}

	@Column(name = "mountain_class_id")
	private int mountainClassId;


	public void setEvents(List<Event> events) {
		this.events = events;
	}


	@OneToMany(mappedBy="mountain")
	private List<Event> events;
	
	
	@ManyToOne
	@JoinColumn(name="state_id")
	private State state;

	
	
	
	public State getState() {
		return state;
	}



	public void setState(State state) {
		this.state = state;
	}



	public Mountain() {
		super();
	}
	


	public Mountain(int id, String name, double longitude, double latitude, int height, int stateId,
			int mountainClassId) {
		super();
		this.id = id;
		this.name = name;
		this.longitude = longitude;
		this.latitude = latitude;
		this.height = height;
		this.mountainClassId = mountainClassId;
	}

	


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	
	public int getMountainClassId() {
		return mountainClassId;
	}

	public void setMountainClassId(int mountainClassId) {
		this.mountainClassId = mountainClassId;
	}

	

}
