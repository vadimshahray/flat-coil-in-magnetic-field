import React from 'react'
import Hand from 'src/assets/hand.svg'
import Wire from 'src/assets/wire.svg'
import { setStorageItem } from '@storage'
import NoWire from 'src/assets/no_wire.svg'
import Rotate from 'src/assets/rotation.svg'
import ConnectWire from 'src/assets/connect_wire.svg'
import DisconnectWire from 'src/assets/disconnect_wire.svg'
import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'

type Props = {
  isOpen: boolean
  onClose(): void
}

export const UserGuideDialog = ({ isOpen, onClose }: Props) => {
  const handleClose = () => {
    setStorageItem('@userReadGuide', 'true')
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth='lg'>
      <DialogTitle variant='h5'>Руководство пользователя</DialogTitle>

      <DialogContent>
        <Typography variant='body2'>
          Экран приложения поделен на 2 окна:
          <ul>
            <li>Окно моделирования</li>
            <li>Окно настроек</li>
          </ul>
        </Typography>

        <Typography variant='h6'>Окно моделирования</Typography>

        <Typography variant='body2'>
          В этом окне происходит 3D-симуляция маленькой комнаты, в центре
          которой находится стол с различными приборами и устройствами. Приборы
          и устройства являются <b>интерактивными</b> - их можно включать по
          кнопке {`"Пуск"`}, менять их параметры и подключать друг к другу
          проводами.
          <br />
          <br />
          <b>Подключение приборов осуществляется</b> путем выбора провода кликом
          по нему курсором мыши и дальнейшего выбора 2-ух клемм (также кликом
          курсора), которые вы хотите соединить. На случай неверного подключения
          предусмотрен <i>специальный индикатор</i> (подробнее ниже).
          <br />
          <br />
          При наведении курсора мыши на интерактивный элемент какого-либо
          прибора или устройства, иконка курсора будет сменяться на следующие:
          <ul style={{ listStyleType: 'none', paddingLeft: '22px' }}>
            <li>
              <img src={Rotate} /> - вращение, крутить колесико мыши;
            </li>
            <li>
              <img src={Hand} /> - нажатие на кнопку, нажать на левую кнопку
              мыши (ЛКМ);
            </li>
            <li>
              <img src={Wire} /> - выбор провода, нажать ЛКМ;
            </li>
            <li>
              <img src={NoWire} /> - отмена выбора провода, нажать ЛКМ;
            </li>
            <li>
              <img src={ConnectWire} /> - подключить провод к клемме, нажать
              ЛКМ;
            </li>
            <li>
              <img src={DisconnectWire} /> - отключить провод от клеммы, нажать
              ЛКМ.
            </li>
          </ul>
          Также вам доступно <b>управление камерой</b>: вращение, изменение
          расстояния до объекта и смена объекта просмотра (подробнее ниже).
          Вращение камерой осуществляется с помощью зажатия правой кнопки мыши
          (ПКМ) и движения мыши в стороны, а расстояние до объекта - с помощью
          зажатия средней кнопки мыши (СКМ) и движения мыши в сторону.
          <br />
          <br />
          Внизу окна расположены несколько вспомогательных блоков. Слева
          находится блок, связанный с подключением приборов и устройств. Он
          содержит:
          <ul>
            <li>
              Специальный цветовой индикатор корректности существующих
              соединений (зеленый - все соединения корректны, желтый - не все
              провода использованы, красный - есть некорректное соединение);
            </li>
            <li>
              Кнопки автоматического подключения и отключения всех проводов
              сразу;
            </li>
            <li>
              Кнопка просмотра корректных <i>схем подключения</i>.
            </li>
          </ul>
          Справа от него находиться блок смены объекта, на который направлена
          камера. В качестве объектов выступают приборы и устройства,
          находящиеся на столе. Они обозначены первой буквой их названия.{' '}
          <i>Чтобы выбрать</i> объект просмотра, нужно нажать на него курсором
          мыши. <i>Чтобы отменить выбор</i> (камера вернется в свое начальное
          положение), достаточно снова кликнуть на выбранный объект. В самом
          краю находится кнопка сокрытия окна {`"Настройки"`}.
        </Typography>

        <br />

        <Typography variant='h6'>Окно настроек</Typography>

        <Typography variant='body2'>
          Данное окно разделено на 3 секции:
          <ul>
            <li>Вспомогательные кнопки;</li>
            <li>Результаты;</li>
            <li>Настройка приборов и устройств.</li>
          </ul>
        </Typography>

        <Typography variant='body2'>
          Вспомогательные кнопки представляют из себя{' '}
          <i>переключатель темы приложения</i> (светлая/темная),{' '}
          <i>переключатель языка интерфейса</i> (русский/английский) и кнопку
          для скачивания <b>отчета по проекту</b>, который содержит в себе
          полное его описание.
          <br />
          <br />В секции {`"Результаты"`} будут выводиться контрольные значения
          эксперимента.
          <br />
          <br />
          Последняя секция представляет из себя{' '}
          <b>альтернативную и более точную</b> систему для настройки параметров
          приборов и устройств. Также она содержит дополнительную информацию:
          используемые константы и пр.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Понятно</Button>
      </DialogActions>
    </Dialog>
  )
}
