import React from 'react'
import TableHeader from '../components/TableHeader'
import TableBody from '../components/TableBody'

/**This is the parent components that holds the Table Header and Table Body components
 * Shows components nested in other components
 */

const Table = () => {
    return (
        <table>
            <TableHeader />
            <TableBody />
      </table>
    )
}

export default Table
