package com.skilldistillery.mountains.entities;

import java.util.List;

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
// Field
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private double longitude;

	private double latitude;

	private int height;
	

	@ManyToOne
	@JoinColumn(name = "mountain_class_id")
	private MountainClass mountainClass;


	@OneToMany(mappedBy="mountain")
	@JsonIgnore
	private List<Event> events;
	
	
	@ManyToOne
	@JoinColumn(name="state_id")
	private State state;

	
	
	
//Constructor
	public Mountain() {
		
	}
	
	public Mountain(int id, String name, double longitude, double latitude, int height, MountainClass mountainClass,
			List<Event> events, State state) {
		super();
		this.id = id;
		this.name = name;
		this.longitude = longitude;
		this.latitude = latitude;
		this.height = height;
		this.mountainClass = mountainClass;
		this.events = events;
		this.state = state;
	}



//Method

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




	public MountainClass getMountainClass() {
		return mountainClass;
	}




	public void setMountainClass(MountainClass mountainClass) {
		this.mountainClass = mountainClass;
	}




	public List<Event> getEvents() {
		return events;
	}




	public void setEvents(List<Event> events) {
		this.events = events;
	}




	public State getState() {
		return state;
	}




	public void setState(State state) {
		this.state = state;
	}
	
	
	
}
