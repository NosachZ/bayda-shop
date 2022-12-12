package com.baydashop.repository;

import com.baydashop.model.Attribute;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AttributeRepository extends JpaRepository<Attribute, Long>{
    List<Attribute> findAttributesByCategoriesId(Long categoryId);
}
