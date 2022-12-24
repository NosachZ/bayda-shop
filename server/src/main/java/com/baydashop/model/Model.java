package com.baydashop.model;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Type;


@Entity
@Table(name = "models")
public class Model {
  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private String title;

  private String description;
  
  @Type(type = "com.baydashop.model.GenericArrayUserType")
  private String[] images;

  private String vendor;

  public Long price;

  private Long availability;

  @ManyToMany(mappedBy = "models", fetch = FetchType.LAZY,
  cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
  })
  private Set<Category> categories;

  @ManyToMany(fetch = FetchType.LAZY,
  cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
  })
  @JoinTable(
    name = "_model_attrvalue", 
    joinColumns = @JoinColumn(name = "model_id", referencedColumnName = "id"), 
    inverseJoinColumns = @JoinColumn(name = "attrvalue_id", referencedColumnName = "id"))
  private Set<AttributeValue> values;


//   getters/setters
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

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String[] getImages() {
    return this.images;
  }

  public void setImages(String[] images) {
    this.images = images;
  }

  public String getVendor() {
    return this.vendor;
  }

  public void setVendor(String vendor) {
    this.vendor = vendor;
  }

  public Long getPrice() {
    return this.price;
  }

  public void setPrice(Long price) {
    this.price = price;
  }

  public Long getAvailability() {
    return this.availability;
  }

  public void setAvailability(Long availability) {
    this.availability = availability;
  }

  public Set<Category> getCategories() {
    return this.categories;
  }

  public void setCategories(Set<Category> categories) {
    this.categories = categories;
  }

  public Set<AttributeValue> getValues() {
    return this.values;
  }

  public void setValues(Set<AttributeValue> values) {
    this.values = values;
  }
}
