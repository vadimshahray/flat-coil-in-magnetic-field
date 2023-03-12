type Icon = import('@mui/material/OverridableComponent').OverridableComponent<
  import('@mui/material').SvgIconTypeMap<object, 'svg'>
> & {
  muiName: string
}

type ToolbarActionButton = React.ReactElement<
  import('@mui/material').ButtonProps & { key: string },
  typeof import('@mui/material').Button
>
