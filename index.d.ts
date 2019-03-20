declare module 'react-native-materialui-textfield' {
    import { PureComponent, ReactNode } from 'react'
    import { TextInputProps, TextStyle, StyleProp, ViewStyle } from 'react-native'
  
    enum LineType {
      solid,
      dotted,
      dashed,
      none
    }
  
    interface LinePropTypes {
      type: LineType
      width: number
      color: string
    }
  
    interface MaterialTextFieldPropTypes extends TextInputProps {
      animationDuration?: number;
  
      fontSize?: number;
      titleFontSize?: number;
      labelFontSize?: number;
      labelHeight?: number;
      labelPadding?: number;
      inputContainerPadding?: number;
  
      labelTextStyle?: TextStyle;
      titleTextStyle?: TextStyle;
      affixTextStyle?: TextStyle;
  
      tintColor?: string;
      textColor?: string;
      baseColor?: string;
  
      label: string;
      title?: string;
  
      characterRestriction?: number;
  
      error?: string;
      errorColor?: string;
  
      lineWidth?: number;
      activeLineWidth?: number;
  
      disabled?: boolean;
      disabledLineType?: LineType;
      disabledLineWidth?: number;
  
      renderAccessory?: () => ReactNode;
  
      prefix?: string;
      suffix?: string;
  
      containerStyle?: StyleProp<ViewStyle>;
      inputContainerStyle?: StyleProp<ViewStyle>;
  
      helpersNumberOfLines?: number;
    }
  
    export class TextField extends PureComponent<MaterialTextFieldPropTypes> {
      focus(): void;
      blur(): void;
      clear(): void;
      value(): string;
      isFocused(): boolean;
      isRestricted(): boolean;
    }
  }