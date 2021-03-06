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
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String username;

	private String password;

	private String role;

	private boolean enabled;
	
	private String email;
	
	private String description;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@ManyToOne
	@JoinColumn(name = "state_id")
	private State state;
	
	@Column(name = "create_date")
	@CreationTimestamp
	private LocalDateTime createDate;
	
	
	@ManyToMany
	@JoinTable(name = "user_mountain",
			joinColumns=@JoinColumn(name="user_id"),
		    inverseJoinColumns=@JoinColumn(name="mountain_id"))
	private List<Mountain> mountains;
	

	@JsonIgnore
	@ManyToMany(mappedBy="users")
	private List<Event> events;
	
	@JsonIgnore
	@OneToMany(mappedBy="host")
	private List<Event> hostEvents;
	 
	 @JsonIgnore
	@OneToMany(mappedBy = "message")
	private List<Message> messages;

	public User() {
		super();
	}

	public User(int id, String username, String password, String role, boolean enabled, String email,
			String description, String imageUrl, State state, LocalDateTime createDate, List<Mountain> mountains,
			List<Event> events, List<Event> hostEvents, List<Message> messages) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.enabled = enabled;
		this.email = email;
		this.description = description;
		this.imageUrl = imageUrl;
		this.state = state;
		this.createDate = createDate;
		this.mountains = mountains;
		this.events = events;
		this.hostEvents = hostEvents;
		this.messages = messages;
	}
	
	public void addMountain(Mountain mountain) {
		if(this.mountains == null) {
			this.mountains = new ArrayList<Mountain>();
		}
		
		if(!this.mountains.contains(mountain)) {
			this.mountains.add(mountain);
			mountain.addUser(this);
		}
	}
	
	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enable) {
		this.enabled = enable;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public List<Mountain> getMountains() {
		return mountains;
	}

	public void setMountains(List<Mountain> mountains) {
		this.mountains = mountains;
	}

	public List<Event> getEvents() {
		return events;
	}

	public void setEvents(List<Event> events) {
		this.events = events;
	}

	public List<Event> getHostEvents() {
		return hostEvents;
	}

	public void setHostEvents(List<Event> hostEvents) {
		this.hostEvents = hostEvents;
	}
	
	
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + ", enabled="
				+ enabled + ", email=" + email + ", description=" + description + ", imageUrl=" + imageUrl + ", state="
				+ state + ", createDate=" + createDate + ", mountains=" + mountains + ", events=" + events
				+ ", hostEvents=" + hostEvents + ", messages=" + messages + "]";
	}

}
