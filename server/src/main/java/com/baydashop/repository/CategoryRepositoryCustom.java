package com.baydashop.repository;

import java.util.Set;

public interface CategoryRepositoryCustom {
    Set<Long> findChildCategories(Long selectedCategory);
}
