package com.oocl.kb.svc.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.oocl.kb.dao.inf.UserDAO;
import com.oocl.kb.model.User;
import com.oocl.kb.svc.inf.UserSVC;

@Component
public class UserSVCImpl implements UserSVC{
	
	private UserDAO userDAO;
	
	Gson gson = new Gson();
	
	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	@Override
	public int validateUser(String email, String password) {
		return this.userDAO.validateUser(email, password);
	}

	@Override
	public User getUserByUsernamePassword(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
