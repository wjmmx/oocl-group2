package com.oocl.kb.svc.inf;

import java.util.List;

import com.oocl.kb.model.User;

public interface UserSVC {
	public int validateUser(String username, String password);

	public User getUserByUsernamePassword(String username, String password);
}
