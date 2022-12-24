package com.baydashop.model;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "categories")
public class Category {

  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private String title;

  private Boolean hasChildren;

  @Column(name = "parent_category")
  private Long parentCategory;

  @ManyToMany
  @JoinTable(
    name = "_category_attribute", 
    joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"), 
    inverseJoinColumns = @JoinColumn(name = "attribute_id", referencedColumnName = "id"))
  private Set<Attribute> attributes;

  @ManyToMany(fetch = FetchType.LAZY,
  cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
  })
  @JoinTable(
    name = "_category_model", 
    joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"), 
    inverseJoinColumns = @JoinColumn(name = "model_id", referencedColumnName = "id"))
  private Set<Model> models;

  
  //getters/setters

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Boolean getHasChildren() {
    return this.hasChildren;
  }

  public void setHasChildren(Boolean hasChildren) {
    this.hasChildren = hasChildren;
  }

  public Long getParentCategory() {
    return this.parentCategory;
  }

  public void setParentCategory(Long parentCategory) {
    this.parentCategory = parentCategory;
  }

  public Set<Attribute> getAttributes() {
    return this.attributes;
  }

  public void setAttributes(Set<Attribute> attributes) {
    this.attributes = attributes;
  }

  /* public Set<Model> getModels() {
    return this.models;
  }

  public void setModels(Set<Model> models) {
    this.models = models;
  } */
}
