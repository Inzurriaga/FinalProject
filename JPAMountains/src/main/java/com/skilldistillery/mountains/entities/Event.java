package com.skilldistillery.mountains.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.ManyToOne;

@Entity
public class Event {
	//Field
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String description;

	private Boolean completed;

	@Column(name = "event_date")
	private LocalDateTime eventDate;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User host;
	
	
	@ManyToOne
	@JoinColumn(name="mountain_id")
	private Mountain mountain;
	
	//Constructor
	
	
	
	
	//Method
//
//	public User getHost() {
//		return host;
//	}
//
//	public void setHost(User host) {
//		this.host = host;
//	}
//
//	public List<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}

	public Mountain getMountain() {
		return mountain;
	}

	public void setMountain(Mountain mountain) {
		this.mountain = mountain;
	}

	@ManyToMany
	@JoinTable(name = "user_event", joinColumns = @JoinColumn(name = "event_id"), inverseJoinColumns = @JoinColumn(name = "user_info_id"))
	private List<User> users;

	public void addUser(User user) {
		if (users == null) {
			users = new ArrayList<User>();
		}
		if (!users.contains(user)) {
			users.add(user);
		}
	}

	public void removeUser(User user) {
		if (users != null && users.contains(user)) {
			users.remove(user);
		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public LocalDateTime getEventDate() {
		return eventDate;
	}

	public void setEventDate(LocalDateTime eventDate) {
		this.eventDate = eventDate;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", description=" + description + ", completed=" + completed + ", eventDate="
				+ eventDate + "]";
	}
	public User getHost() {
		return host;
	}

	public void setHost(User host) {
		this.host = host;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
}
