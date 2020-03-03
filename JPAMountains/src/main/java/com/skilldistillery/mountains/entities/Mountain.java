package com.skilldistillery.mountains.entities;



import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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


	@JsonIgnore
	@OneToOne(mappedBy="mountain")
	private Event event;
	
	
	@ManyToOne
	@JoinColumn(name="state_id")
	private State state;
	
	@JsonIgnore
	@ManyToMany(mappedBy="mountains")
	private List<User> users;
	
	
	
//Constructor
	public Mountain() {
		
	}
	
	public Mountain(int id, String name, double longitude, double latitude, int height, MountainClass mountainClass,
			Event event, State state) {
		super();
		this.id = id;
		this.name = name;
		this.longitude = longitude;
		this.latitude = latitude;
		this.height = height;
		this.mountainClass = mountainClass;
		this.event = event;
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




	public Event getEvent() {
		return event;
	}




	public void setEvents(Event event) {
		this.event = event;
	}




	public State getState() {
		return state;
	}




	public void setState(State state) {
		this.state = state;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public void setEvent(Event event) {
		this.event = event;
	}
	
	
	}
	

