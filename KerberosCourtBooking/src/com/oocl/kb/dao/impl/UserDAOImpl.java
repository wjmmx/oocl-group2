package com.oocl.kb.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.oocl.kb.dao.inf.UserDAO;
import com.oocl.kb.model.User;

@Component
public class UserDAOImpl implements UserDAO {

	@Autowired
	SessionFactory sessionFactory;
	Session session;
	Transaction tx;

	@Override
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public int validateUser(String username, String password) {		
		try {
			int validate = 0;
			Session session = sessionFactory.openSession();
			tx = session.beginTransaction();
			Query query = session.createQuery("SELECT COUNT(username) FROM User WHERE username = ? and password = ? ");
			query.setParameter(0, username);
			query.setParameter(1, password);
			tx.commit();
			validate = Integer.parseInt(query.uniqueResult().toString());
			session.close();
			return validate;
		}
		catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
}
