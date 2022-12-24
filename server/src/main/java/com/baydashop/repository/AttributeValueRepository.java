package com.baydashop.repository;

import com.baydashop.model.AttributeValue;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AttributeValueRepository extends JpaRepository<AttributeValue, Long>{
    List<AttributeValue> findByAttributeId(Long attributeId);
}

