package com.baydashop.repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import com.baydashop.model.Category;

public class CategoryRepositoryCustomImpl implements CategoryRepositoryCustom {

    private final CategoryRepositoryBasic categoryRepositoryBasic;

    // constructor-based injection
    public CategoryRepositoryCustomImpl(
        CategoryRepositoryBasic categoryRepositoryBasic)
    {
        this.categoryRepositoryBasic = categoryRepositoryBasic;
    }

    public Set<Long> findChildCategories(Long selectedCategory) {
        Set<Long> childCategories = new HashSet<>();
        childCategories.add(selectedCategory);

        List<Category> children = categoryRepositoryBasic.findByParentCategory(selectedCategory);
        if (children.size() != 0) {
            for (Category category : children) {
                childCategories.addAll(findChildCategories(category.getId()));
            }
        }
        return childCategories;
    }
    
}
