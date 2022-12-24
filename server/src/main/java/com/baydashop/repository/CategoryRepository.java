package com.baydashop.repository;

import com.baydashop.model.Category;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends 
    CategoryRepositoryBasic,
    CategoryRepositoryCustom 
{ 
}
