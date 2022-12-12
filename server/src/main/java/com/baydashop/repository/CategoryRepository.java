package com.baydashop.repository;

import com.baydashop.model.Attribute;
import com.baydashop.model.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {    
    Category findByName(String Name);

    List<Category> findByParentCategory(Long parentCategory);

    List<Category> findCategoriesByAttributesId(Long attributeId);
    
    // List<Attribute> findAttributesByCategoriesId(Long categoryId);
}
