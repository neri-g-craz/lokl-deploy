package com.lokl.loklDeploy.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.lokl.loklDeploy.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	// JPQL... Java Persistance Query Language
	@Query("SELECT u FROM User u WHERE u.correo=?1") //Consultas integradas de JPA
	User findByEmail (String email);
}//siempre
