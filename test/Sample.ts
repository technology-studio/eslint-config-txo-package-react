/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-12-03T16:19:54+01:00
 * @Copyright: Technology Studio
**/

import { useEffect } from 'react'

// react-hooks/rules-of-hooks
type RulesOfHooksProps = { someProp?: string }
export const RulesOfHooksOk = (props: RulesOfHooksProps): null => {
  useEffect(() => {
    if (props.someProp != null && props.someProp !== '') {
      // localStorage.setItem('formData', name);
    }
  })
  return null
}

export const RulesOfHooksError = (props: RulesOfHooksProps): null => {
  if (props.someProp != null && props.someProp !== '') {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- validation on case when rule should be reported
    useEffect(function persistForm() {
      // localStorage.setItem('formData', name);
    })
  }
  return null
}
