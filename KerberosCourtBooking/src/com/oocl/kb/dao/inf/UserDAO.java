package com.oocl.kb.dao.inf;

import java.util.List;

import org.hibernate.SessionFactory;

import com.oocl.kb.model.User;

public interface UserDAO {
	public void setSessionFactory(SessionFactory sessionFactory);
	
	public int validateUser(String username, String password);

}
