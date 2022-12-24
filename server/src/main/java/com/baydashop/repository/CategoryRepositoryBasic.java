package com.baydashop.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baydashop.model.Category;

public interface CategoryRepositoryBasic extends JpaRepository<Category, Long> {    
    
    Category findByName(String Name);

    List<Category> findByParentCategory(Long parentCategory);
    
    // Set<Long> findChildCategories(Long selectedCategory);
    List<Category> findCategoriesByModelsId(Long modelId);

}
