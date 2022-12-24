package com.baydashop.model;

import java.util.List;

public class AttributeFilterType {

    private AttributeDataType attribute;
    private List<AttributeValueType> values;

    // getter/setter

    public AttributeDataType getAttribute(){
        return this.attribute;
    }

    public void setAttribute(AttributeDataType attr) {
        this.attribute = attr;
    }

    public List<AttributeValueType> getValues() {
        return this.values;
    }

    public void setValues(List<AttributeValueType> values) {
        this.values = values;
    }
    
    
}
