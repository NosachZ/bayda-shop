package com.baydashop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baydashop.model.Model;

public interface ModelRepository extends JpaRepository<Model, Long>{
    // List<Model> findByParentCategory(Long parentCategory);

    Model findByName(String Name);

    List<Model> findModelsByCategoriesId(Long categoryId);
}
