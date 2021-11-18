using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScrollView : LayoutGroup
{
    public enum FitType
    {
        Uniform,
        Width,
        Height
    }

    public FitType fitType;

    public int rows;
    public int columns;
    public Vector2 cellSize;
    public Vector2 spacing;


    public override void CalculateLayoutInputHorizontal()
    {

        base.CalculateLayoutInputHorizontal();



        rows = rectChildren.Count % columns == 0 ? rectChildren.Count / columns : ((rectChildren.Count -(rectChildren.Count % columns) ) + 1) / columns;

       

        int columnCount = 0;
        int rowCount = 0;
        this.GetComponent<RectTransform>().sizeDelta = new Vector2(420, ((cellSize.y+spacing.y) * (rows ))+padding.bottom); ;
        for (int i = 0; i < rectChildren.Count; i++)
        {

            rowCount = i / columns;
            columnCount = i % columns;

            var item = rectChildren[i];

            var xPos = (cellSize.x * columnCount) + (spacing.x * columnCount) + padding.left;
            var yPos = (cellSize.y * rowCount) + (spacing.y * rowCount) + padding.top;

            SetChildAlongAxis(item, 0, xPos, cellSize.x);
            SetChildAlongAxis(item, 1, yPos, cellSize.y);
        }

    }

    public override void CalculateLayoutInputVertical() { }

    public override void SetLayoutHorizontal() { }

    public override void SetLayoutVertical() { }
}