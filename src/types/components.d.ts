type Icon = import('@mui/material/OverridableComponent').OverridableComponent<
  import('@mui/material').SvgIconTypeMap<object, 'svg'>
> & {
  muiName: string
}

type ToolbarActionButton = React.ComponentType<
  import('@mui/material').ButtonProps & { key: string }
>
