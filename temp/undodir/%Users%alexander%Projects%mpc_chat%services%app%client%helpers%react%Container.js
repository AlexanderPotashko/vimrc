Vim�UnDo� ���9�(ʖ�ȋ��3��5H��df�Y���� D      H      return React.cloneElement( this.props.children, { ...this.props })      H      9       9   9   9    X{��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             X{�     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             X{�     �                  5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        X{�     �                :import { loadProps } from 'Helpers/react/decorators/load';    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        X{�     �                &import { connect } from 'react-redux';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       X{�     �         .      %export class Body extends Component {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       X{�     �         .      !export class  extends Component {5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                v       X{�!     �         .      *export class Container extends Component {5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                            .                     v       X{�&     �                     const BodyLoad =     loadProps((props, load) => ([   
    load({         name: 'users',         when: () => {           return [];         },   ,      resolver: (ids) => props.getUsers(ids)       })     ]))(Body);        export default   
  connect(       (state, props) => ({         users: props.users,         active: props.active       }),       {}     )(BodyLoad);5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        X{�(     �                (BodyLoad);5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                      	          V       X{�.     �                  static propTypes = {       getUsers: PropTypes.func,       active: PropTypes.bool,       users: PropTypes.any     }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�/     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       X{�=     �                   �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       X{�B     �                   if(this.props.5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�G     �                    if(Array.isArray(this.props.5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       X{�J     �      	               �             5�_�                    	        ����                                                                                                                                                                                                                                                                                                                            	                    V       X{�P     �      	              return (         <div>   	        {             React.Children.map(                this.props.children,               (element, idx) => {   (              console.log(element, idx);   N              return React.cloneElement(element, { ref: idx, ...this.props });               }             )   	        }         </div>       );5�_�                           ����                                                                                                                                                                                                                                                                                                                            	          	          V       X{�P     �         
    �         
    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�S     �                   return (         <div>   	        {             React.Children.map(                this.props.children,               (element, idx) => {   (              console.log(element, idx);   N              return React.cloneElement(element, { ref: idx, ...this.props });               }             )   	        }         </div>       );5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�W     �                *                console.log(element, idx);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       X{�Z     �               P                return React.cloneElement(element, { ref: idx, ...this.props });5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       X{�[     �               !              (element, idx) => {   I                React.cloneElement(element, { ref: idx, ...this.props });5�_�                       !    ����                                                                                                                                                                                                                                                                                                                               "          (       v       X{�]     �               [              (element, idx) => { React.cloneElement(element, { ref: idx, ...this.props });                 }5�_�                       Z    ����                                                                                                                                                                                                                                                                                                                               Z          \       v   l    X{�_     �               ]              (element, idx) => { React.cloneElement(element, { ref: idx, ...this.props }); }5�_�                            ����                                                                                                                                                                                                                                                                                                                                          !       v   !    X{�b     �               Z              (element, idx) => { React.cloneElement(element, { ref: idx, ...this.props })5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�k     �             
         return (           <div>             {               React.Children.map(   "              this.props.children,   X              (element, idx) => React.cloneElement(element, { ref: idx, ...this.props })               )             }           </div>         );5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       X{�l     �         
    �         
    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       X{�n     �                     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       X{�u     �               !      return React.cloneElement()5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                V       X{�z     �               4      return React.cloneElement(this.props.children)5�_�                        >    ����                                                                                                                                                                                                                                                                                                                               >          H       v   Z    X{��     �               X              (element, idx) => React.cloneElement(element, { ref: idx, ...this.props })5�_�      !                  >    ����                                                                                                                                                                                                                                                                                                                               >          H       v   Z    X{��    �               M              (element, idx) => React.cloneElement(element, { ..this.props })5�_�       "           !      7    ����                                                                                                                                                                                                                                                                                                                               >          H       v   Z    X{��     �               8      return React.cloneElement(this.props.children, { )5�_�   !   #           "      6    ����                                                                                                                                                                                                                                                                                                                               >          H       v   Z    X{��    �               9      return React.cloneElement(this.props.children, { })5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                          #       v   #    X{��     �               G      return React.cloneElement(this.props.children, { ...this.props })5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                          #       v   #    X{��     �               C      return React.cloneElement(.props.children, { ...this.props })5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                          #       v   #    X{��     �               G      return React.cloneElement(this.props.children, { ...this.props })5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                v       X{��     �               H      return React.cloneElement( this.props.children, { ...this.props })5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                v       X{��    �               B       React.cloneElement( this.props.children, { ...this.props })5�_�   '   )           (      =    ����                                                                                                                                                                                                                                                                                                                                                v       X{��    �               N              (element, idx) => React.cloneElement(element, { ...this.props })5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                v       X{�   	 �                 5�_�   )   -           *           ����                                                                                                                                                                                                                                                                                                                            	          	          v       X{��   
 �               "    if(Array.isArray(this.props.){5�_�   *   .   +       -      )    ����                                                                                                                                                                                                                                                                                                                            	          	          v       X{��     �               *    if(Array.isArray(this.props.children){5�_�   -   /           .      )    ����                                                                                                                                                                                                                                                                                                                            	          	          v       X{��     �                 �             5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                                v       X{��     �                   �             5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                v       X{��    �      	       5�_�   0   2           1      =    ����                                                                                                                                                                                                                                                                                                                                                v       X{��     �               N              (element, idx) => React.cloneElement(element, { ...this.props })5�_�   1   3           2      F    ����                                                                                                                                                                                                                                                                                                                                                v       X{��     �               W              (element, idx) => React.cloneElement(element, { ref: idx ...this.props })5�_�   2   4           3      >    ����                                                                                                                                                                                                                                                                                                                               F          >       v   >    X{��     �               X              (element, idx) => React.cloneElement(element, { ref: idx, ...this.props })5�_�   3   5           4      L    ����                                                                                                                                                                                                                                                                                                                               F          >       v   >    X{��     �               O              (element, idx) => React.cloneElement(element, {  ...this.props })5�_�   4   6           5      M    ����                                                                                                                                                                                                                                                                                                                               F          >       v   >    X{��     �               Q              (element, idx) => React.cloneElement(element, {  ...this.props,  })�             5�_�   5   7           6      V    ����                                                                                                                                                                                                                                                                                                                               V          V       v   V    X{��     �               Z              (element, idx) => React.cloneElement(element, {  ...this.props, ref: idx, })5�_�   6   8           7      =    ����                                                                                                                                                                                                                                                                                                                               V          V       v   V    X{��     �               Y              (element, idx) => React.cloneElement(element, {  ...this.props, ref: idx })5�_�   7   9           8      =    ����                                                                                                                                                                                                                                                                                                                               =          =       v   =    X{��    �               Y              (element, idx) => React.cloneElement(element, {  ...this.props, ref: idx })5�_�   8               9      H    ����                                                                                                                                                                                                                                                                                                                               =          =       v   =    X{��    �               H      return React.cloneElement( this.props.children, { ...this.props })5�_�   *   ,       -   +      )    ����                                                                                                                                                                                                                                                                                                                                         #       v   #    X{��    �               +    if(Array.isArray(this.props.children)){5�_�   +               ,          ����                                                                                                                                                                                                                                                                                                                                         #       v   #    X{��     �                )import React, { Component } from 'react';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        X{�     �              5��