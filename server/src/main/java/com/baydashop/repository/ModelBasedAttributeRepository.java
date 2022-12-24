package com.baydashop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baydashop.model.ModelBasedAttribute;

public interface ModelBasedAttributeRepository extends JpaRepository<ModelBasedAttribute, Long>{
    
}
